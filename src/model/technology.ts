export type ComparedTechnology = {
  name: string,
  uri: string,
  popularity: number,
  checkedCriteria: string[]
}

export type ComparedTechnologyScored = ComparedTechnology & { score: number }

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

interface TechnologiesT<A> {
  [type: string]: A[]
}

export type Technologies = TechnologiesT<ComparedTechnology>
export type TechnologiesScored = TechnologiesT<ComparedTechnologyScored>
