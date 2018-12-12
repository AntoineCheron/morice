export type ComparedTechnology = {
  name: string,
  uri?: string,
  checkedCriteria: string[]
}

export enum TechnologyTypesEnum {
  INTERFACE_DESCRIPTION_LANGUAGE = 'InterfaceDescriptionLanguages',
  DATA_INTERCHANGE_FORMAT = 'DataInterchangeFormats',
  DATA_INTERCHANGE_FORMAT_WITH_RDF_IDL = 'ExtensibleDataInterchangeFormatsWithRdfIdl',
  IMPLEMENTATION_FRAMEWORKS = 'ImplementationFrameworks'
}

export type TechnologyType = {
  label: string,
  img: string,
  types: TechnologyTypesEnum[]
};

export type Technologies = { [type: string]: ComparedTechnology[] }
