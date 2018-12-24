import { Criteria, MaturityCategory, MaturityLevel } from '../model/maturity'
import { TechnologyTypesEnum } from '../model/technology'
import { getTechnologies } from './technology';

export function filterCriteria(selectedKinds: TechnologyTypesEnum[]): MaturityCategory[] {
  const criteria = getCriteria(selectedKinds)

  return maturityCategories.map(category => {
    const newLevels = Object.entries(category.levels)
      .reduce<{ [n:string]: MaturityLevel }>((acc, [levelName, level]) => {
        acc[levelName] = {
          ...level,
          criteria: Object.entries(level.criteria)
            .filter(([name, unused]) => criteria.includes(name))
            .reduce<{[k: string]: string}>((acc, [name, description]) => { acc[name] = description; return acc; }, {})
        };
        return acc;
      }, {});

    return {
      ...category,
      levels: newLevels
    }
  })
}

export function getCriteria(selectedKinds: string[]): string[] {
  return getTechnologies(selectedKinds)
    .map(technology => technology.checkedCriteria)
    .reduce((acc, el) => acc.concat(el), []) // flatMap
    .reduce<string[]>((acc, el) => acc.includes(el) ? acc : acc.concat([el]), []) // removeDupplicates
}

const none: MaturityLevel = { name: 'None', criteria: {}}

// WS3 - DESIGN Maturity Category

export enum DESIGN { RPC, RESOURCES, PROTOCOL_COMPLIANCE, ATOMIC_RESOURCES }

const rpc: MaturityLevel = {
  name: 'RPC',
  criteria: {}
}

const resources: MaturityLevel = {
  name: 'Resources',
  criteria: {
    'MT': 'Models/considers available media types',
    'MR': 'Models resources',
    'MRA': 'Models resources\'s attributes',
    'SC': 'Separate Domain-model from URI-model',
    'OTO': 'Operations are associated to their own input and output data model'
  }
}

const protocolCompliance: MaturityLevel = {
  name: 'Protocol Compliance',
  criteria: {
    'MRO': 'Supports association of HTTP verbs to operations',
    'EXT': 'Extensible with custom data-interchange formats',
    'CN': 'Support content-negotiation',
  }
}

const atomicResources: MaturityLevel = {
  name: 'Atomic Resources',
  criteria: {
    'EAR': 'Enforces that the full resource is the smallest data-set operations can handle',
  }
}

export const design: MaturityCategory = {
  name: 'Design',
  levels: {
    [DESIGN.RPC]: rpc,
    [DESIGN.RESOURCES]: resources,
    [DESIGN.PROTOCOL_COMPLIANCE]: protocolCompliance,
    [DESIGN.ATOMIC_RESOURCES]: atomicResources
  }
}

// WS3 - Profile Maturity Category

export enum PROFILE { NONE, INTERACTION, DOMAIN }

const interaction: MaturityLevel = {
  name: 'Interaction',
  criteria: {
    'DR': 'Describes resources\' properties',
    'OSD': 'Describes HTTP operations',
    'LT': 'Describes templated URIs',
    'CR': 'Describes available interchange formats for Read Requests',
    'CU': 'Describes available interchange formats Update Requests',
    'CM': 'Describes HTTP verb associated to an operation',
    'RUN': 'Targets runtime information-enriched description',
    'PS': 'Supports pagination description'
  }
}

const domainProfile: MaturityLevel = {
  name: 'Domain',
  criteria: {
    'HL': 'Provides hyperlinks to other resources as meta-data',
    'HYP': 'Hypermedia controls',
    'MC': 'Models and describes business constraints on the data model',
    'TI': 'Support type inheritance',
    'LNM': 'Links are modeled by the framework, not added manually in request handlers',
    'COA': 'Describe conditions to denote an operation/link availability, otherwise the model says they are always available',
    'CC': 'Conditions for operation/link availability use more information than current resource state, such as the application context, or user-provided information',
    'AUT': 'Model the authentication mechanism',
    'RS': 'Describe resources\' states',
    'SLA': 'Describe non-functional properties such as Service Level Agreement',
    'ERR': 'Describe errors'
  }
}

export const profile: MaturityCategory = {
  name: 'Profile',
  levels: {
    [PROFILE.NONE]: none,
    [PROFILE.INTERACTION]: interaction,
    [PROFILE.DOMAIN]: domainProfile
  }
}

// WS3 - Semantic Maturity Category

export enum SEMANTIC { NONE, DESCRIPTION, LINKED_DATA }

const description: MaturityLevel = {
  name: 'Semantic Description',
  criteria: {
    'SD': 'Semantically describes resources\' properties and HTTP operations',
    'DC': 'Support machine-interpretable and deterministic conditions to denote an operation/link availability',
    'RDF': 'Support the addition of other RDF vocabularies - makes it RDF-compatible'
  }
}

const linkedData: MaturityLevel = {
  name: 'Linked Data',
  criteria: {
    'CL': 'Support giving human-interpretable semantic meaning to links',
    'SCL': 'Support giving semantic meaning to links from RDF vocabulary',
    'PS': 'description'
  }
}

export const semantic: MaturityCategory = {
  name: 'Semantic',
  levels: {
    [SEMANTIC.NONE]: none,
    [SEMANTIC.DESCRIPTION]: description,
    [SEMANTIC.LINKED_DATA]: linkedData
  }
}

// Other criteria

export const otherCriteria: MaturityLevel = {
  name: 'Other criteria',
  criteria: {
    'JSON': 'JSON-based format',
    'ECD': 'Entity-centric document as opposed to triple-centric',
    'NOM': 'No modification on the structure compared to an original JSON file, limited to adding more information',
    'HF': 'Made for human-readability',
    'MF': 'Made for machine-readability',
    'CUR': 'Support for Curies',
    'PX': 'Uses prefix for reserved keywords to avoid name collision',
    'SML': 'Support several meta-data level',
    'ERS': 'Transfer the resource\'s state explicitly',
    'TAR': 'Operations have a field to indicate which URI the operation targets, allowing to reference them as resources',
    'FSM': 'Model the system as a FSM',
    'RS': 'Model resources as FSM, not only the system',
    'STA': 'Targets static documentation',
    'INC': 'Documentation can be split into several pieces',
    'FF': 'File Format',
    'PL': 'Programming Language',
    'LGEN': 'Links to other resources hold by the system are generated at runtime, not written as code'
  }
}

const others: MaturityCategory = {
  name: 'Others',
  levels: {
    'others': otherCriteria
  }
};

export const maturityCategories = [ design, profile, semantic, others ]

export const allCriteria: Criteria = maturityCategories
  .map(category => Object.values(category.levels))
  .reduce((acc, el) => acc.concat(el), []) // flatten operation
  .map(level => level.criteria)
  .reduce((acc, el) => Object.assign(acc, el), {})
