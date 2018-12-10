export type ComparedTechnology = {
  name: string,
  uri?: string,
  checkedCriteria: string[]
}

export enum TechnologyTypes {
  INTERFACE_DESCRIPTION_LANGUAGE = 'InterfaceDescriptionLanguages',
  DATA_INTERCHANGE_FORMAT = 'DataInterchangeFormats',
  DATA_INTERCHANGE_FORMAT_WITH_RDF_IDL = 'ExtensibleDataInterchangeFormatsWithRdfIdl',
  IMPLEMENTATION_FRAMEWORKS = 'ImplementationFrameworks'
}

export type Technologies = { [type: string]: ComparedTechnology[] }
