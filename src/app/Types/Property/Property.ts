interface Property {

  identifier: String;
  type;
  pattern: String;
  patternErrorMessage: String;
  selected: String;
  item: Item;

  dropdownLabel: String;
  dropdownItems: Item[];
}
