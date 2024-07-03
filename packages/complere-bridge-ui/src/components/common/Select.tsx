import { Fragment, useState , useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useIsTestnetMode } from '../../hooks/useIsTestnetMode'
import { useArbQueryParams } from '../../hooks/useArbQueryParams'
 

interface NetworkItem {
  mode: string;
}
// const network: NetworkItem[] = [{ mode: 'Testnet' }, { mode: 'Mainnet' }]

const network: NetworkItem[] = [{ mode: 'Testnet' }]
export default function TestModeSelect() {
  const initialNetworkItem = network[0];
  const [selected, setSelected] = useState<NetworkItem | undefined>(initialNetworkItem)
  const [isTestnetMode, toggleTestnetMode] = useIsTestnetMode()
 
console.log("isTestnetMode" , isTestnetMode);


useEffect(  () =>  {
 if(isTestnetMode === true) {
  setSelected(network[0])
 }

 else {
  setSelected(network[1])
 }

},[ isTestnetMode]
)
  
  const handleListboxChange = (newValue: { mode: string }) => {
 
    console.log("isTestnetMode" , isTestnetMode);
    if (newValue.mode !== selected?.mode) {
      setSelected(newValue)
      toggleTestnetMode()
    }
  }

  return (
    <div className="fixed w-26 rounded-lg border-2 border-gray-400">
      <Listbox value={selected} onChange={handleListboxChange}>
        <div className="relative  ">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-800 sm:text-sm">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-600"
              aria-hidden="true"
            />

            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <span className="mr-2 block truncate">{selected?.mode}</span>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {network.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.mode}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

