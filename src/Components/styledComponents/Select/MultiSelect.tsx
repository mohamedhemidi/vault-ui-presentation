import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

/*
//
// Types :
//
//
*/

export type SelectOption = {
  label?: string;
  value?: string | number;
};

type ListOption = {
  isOpen: boolean;
};
type isOptionSelected = {
  isOptionSelected: boolean;
  isOptionHighlited: boolean;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

/*
//
// Styles :
//
//
*/

const Container = styled.div`
  position: relative;
  width: 20em;
  min-height: 1.5em;
  border: 0.05em solid #777;
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em;
  border-radius: 0.25em;
  outline: none;

  &:focus {
    border-color: hsl(200, 100%, 50%);
  }
`;

const Value = styled.span`
  flex-grow: 1;
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
`;
const ClearButton = styled.button`
  background: none;
  color: #777;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.25em;

  &:focus,
  &:hover {
    color: #333;
  }
`;

const OptionBadge = styled.button`
  display: flex;
  align-items: center;
  border: 0.05em solid #777;
  border-radius: 0.25em;
  padding: 0.15em 0.25em;
  gap: 0.25em;
  cursor: pointer;
  background: none;
  outline: none;
  & > span {
    font-size: 1.25em;
    color: #777;
  }
  &:hover,
  &:focus {
    background-color: hsl(0, 100%, 90%);
    border-color: hsl(0, 100%, 50%);
  }
  &:hover > span,
  &:focus > span {
    color: hsl(0, 100%, 50%);
  }
`;
const RemoveBtn = styled.span``;
const Divider = styled.div`
  background-color: #777;
  align-self: stretch;
  width: 0.05em;
`;
const Caret = styled.div`
  translate: 0 25%;
  border: 0.25em solid transparent;
  border-top-color: #777;
`;
const Options = styled.ul<ListOption>`
  position: absolute;
  margin: 0;
  padding: 0;
  list-style: none;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  max-height: 15em;
  overflow-y: auto;
  border: 0.05em solid #777;
  border-radius: 0.25em;
  width: 100%;
  left: 0;
  top: calc(100% + 0.25em);
  background-color: white;
  z-index: 100;
`;

const Option = styled.li<isOptionSelected>`
  padding: 0.25em 0.5em;
  cursor: pointer;
  background-color: ${(props) =>
    props.isOptionSelected ? "background-color: hsl(200, 100%, 70%)" : ""};
    
  background-color: ${(props) =>
    props.isOptionHighlited ? "background-color: hsl(200, 100%, 50%)" : ""};
`;

/*
//
// Component :
//
//
*/
const Select = ({ multiple, value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target != containerRef.current) return;
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen((prev) => !prev);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case "Escape":
          setIsOpen(false);
          break;
      }
    };
    containerRef.current?.addEventListener("keydown", handler);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      containerRef.current?.removeEventListener("keydown", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, highlightedIndex, options]);

  return (
    <Container
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
    >
      <Value>
        {multiple
          ? value.map((v) => (
              <OptionBadge
                key={v.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(v);
                }}
              >
                {v.label}
                <RemoveBtn>&times;</RemoveBtn>
              </OptionBadge>
            ))
          : value?.label}
      </Value>
      <ClearButton
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
      >
        &times;
      </ClearButton>
      <Divider></Divider>
      <Caret></Caret>
      <Options isOpen={isOpen}>
        {options.map((option, index) => (
          <Option
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value}
            isOptionSelected={isOptionSelected(option)}
            isOptionHighlited={index === highlightedIndex}
          >
            {option.label}
          </Option>
        ))}
      </Options>
    </Container>
  );
};

export default Select;
