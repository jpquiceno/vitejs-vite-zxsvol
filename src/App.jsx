import { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import './prism.comps.css';

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
];

const locationAlpha = [
  { id: 1, city: 'London' },
  { id: 2, city: 'Glasgow' },
  { id: 3, city: 'Edinbourough' },
  { id: 4, city: 'Liverpool' },
  { id: 5, city: 'Manchester' },
];

function App() {
  const [count, setCount] = useState(0);
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <div className="App">
      <h1>Prism Styled Dropdown w/ Headless UI</h1>
      <p style={{ fontSize: 16, lineHeight: 1.4 }}>
        Below is an example of HeadlessUI's Listbox component using Prism CSS
      </p>
      <hr />
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        {({ open }) => (
          <>
            <div className="prism-select prism-select-md">
              <Listbox.Label className="prism-check__label">
                Assignee:
              </Listbox.Label>
              <Listbox.Button className="prism-select__toggle form-control">
                {selectedPerson.name}
              </Listbox.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Listbox.Options static as="div">
                  <div className="prism-select__menu-open">
                    {people.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        value={person}
                        as="Fragment"
                        disabled={person.unavailable}
                      >
                        {({ active, selected, disabled }) => (
                          <button
                            disabled={person.unavailable}
                            className={`prism-select__option ${
                              active ? 'active' : ''
                            } ${
                              selected ? 'prism-select__option-selected' : ''
                            } ${
                              disabled ? 'prism-select__option-disabled' : ''
                            } `}
                          >
                            <span
                              className={`prism-select__label ${
                                active ? 'active' : ''
                              } ${selected ? 'active' : ''} `}
                            >
                              {person.name}
                            </span>
                          </button>
                        )}
                      </Listbox.Option>
                    ))}
                  </div>
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}

export default App;
