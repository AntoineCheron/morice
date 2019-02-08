import { TechnologyTypesEnum, Technologies, TechnologyType } from '../model/technology'

import idl from './icons/idl.svg'
import dif from './icons/dif.svg'
import framework from './icons/framework.svg'

export const classifiedKindOfTechnologies: TechnologyType[] = [
  {
    label: 'Interface Description Languages',
    types: [TechnologyTypesEnum.INTERFACE_DESCRIPTION_LANGUAGE],
    img: idl
  }, {
    label: 'Data Interchange Formats',
    types: [TechnologyTypesEnum.DATA_INTERCHANGE_FORMAT, TechnologyTypesEnum.DATA_INTERCHANGE_FORMAT_WITH_RDF_IDL],
    img: dif
  }, {
    label: 'Frameworks',
    types: [TechnologyTypesEnum.IMPLEMENTATION_FRAMEWORKS],
    img: framework
  }
]

export const technologies: Technologies = {
  [TechnologyTypesEnum.INTERFACE_DESCRIPTION_LANGUAGE]: [
    { name: 'RAPIDO - CRUD Option', popularity: 0, uri: 'https://www.rapidodesigner.com', checkedCriteria: [ 'MR', 'MRO', 'EAR', 'LT', 'STA'] },
    { name: 'RAPIDO - Hypermedia option', popularity: 0, uri: 'https://www.rapidodesigner.com', checkedCriteria: [ 'MR', 'MRO', 'EAR', 'LT', 'HL', 'HYP', 'CL', 'FSM', 'STA' ] },
    { name: 'Modeling RESTful Applications', popularity: 0, uri: 'http://ws-rest.org/2011/proc/a4-schreier.pdf', checkedCriteria: [ 'MT', 'MR', 'OTO', 'MRA', 'MRO', 'DR', 'OSD', 'LT', 'HL', 'HYP', 'COA', 'CL', 'FSM', 'STA'] },
    { name: 'Formal modeling of RESTful APIs using finite state machines', popularity: 0, uri: 'https://www.researchgate.net/publication/220940706_Formal_Modeling_of_RESTful_Systems_Using_Finite-State_Machines', checkedCriteria: [ 'MT', 'MR', 'HL', 'HYP', 'FSM', 'STA'] },
    { name: 'A model-driven approach for REST compliant service', popularity: 0, uri: 'http://www.iaas.uni-stuttgart.de/RUS-data/INPROC-2014-23%20-%20A%20model%20driven%20approach%20for%20REST%20compliant%20services.pdf', checkedCriteria: [ 'MT', 'SC', 'MR', 'OTO', 'MRA', 'MRO', 'DR', 'OSD', 'HL', 'HYP', 'CL', 'STA'] },
    { name: 'Hydra', popularity: 1, uri: 'http://www.hydra-cg.com/spec/latest/core/', checkedCriteria: [ 'MR', 'OTO', 'MRA', 'MRO', 'DR', 'OSD', 'LT', 'RUN', 'PS', 'HL', 'HYP', 'TI', 'ERR', 'SD', 'RDF', 'CL', 'SCL', 'STA' ] },
    { name: 'Atom Publishing Protocol + Atom Syndication Format', popularity: 1, uri: 'https://tools.ietf.org/html/rfc5023', checkedCriteria: [ 'MT', 'MR', 'MRA', 'EAR', 'DR', 'OSD', 'LT', 'RUN', 'HL', 'TI', 'CL', 'SCL', 'STA' ] },
    { name: 'WSDL + SAWSDL', popularity: 1, uri: 'https://www.w3.org/TR/sawsdl/', checkedCriteria: [ 'MT', 'MR', 'OTO', 'MRA', 'MRO', 'DR', 'OSD', 'LT', 'MC', 'SD', 'RDF', 'STA' ] },
    { name: 'WADL', popularity: 1, uri: 'https://www.w3.org/Submission/wadl/', checkedCriteria: [ 'MT', 'MR', 'OTO', 'MRA', 'MRO', 'DR', 'OSD', 'LT', 'MC', 'ERR', 'STA' ] },
    { name: 'OpenApi/Swagger', popularity: 2, uri: 'https://swagger.io/resources/open-api/', checkedCriteria: [ 'MT', 'SC', 'MR', 'OTO', 'MRA', 'MRO', 'DR', 'OSD', 'LT', 'HL', 'HYP', 'TI', 'AUT', 'SLA', 'ERR', 'CL', 'STA' ] },
    { name: 'API Blueprint + MSON', popularity: 1, uri: 'https://apiblueprint.org/documentation/specification.html', checkedCriteria: [ 'MT', 'SC', 'MR', 'OTO', 'MRA', 'MRO', 'LT', 'MC', 'TI', 'ERR', 'CL', 'SCL', 'STA' ] },
    { name: 'hREST + microWSMO', popularity: 0, uri: 'http://sweet.kmi.open.ac.uk/pub/microWSMO.pdf', checkedCriteria: [ 'OTO', 'MRO', 'DR', 'OSD', 'LT', 'SD', 'RDF', 'TAR', 'STA' ] },
    { name: 'RESTdesc', popularity: 0, uri: 'http://restdesc.org', checkedCriteria: [ 'MT', 'SC', 'MR', 'OTO', 'MRO', 'DR', 'OSD', 'LT', 'RUN', 'SD', 'RDF', 'CL', 'SCL', 'TAR' ] },
    { name: 'RADL', popularity: 0, uri: 'https://github.com/restful-api-description-language/radl-specification/blob/master/spec.md', checkedCriteria: [ 'MT', 'SC', 'MR', 'OTO', 'MRA', 'MRO', 'DR', 'OSD', 'LT', 'RUN', 'HL', 'HYP', 'AUT', 'RDF', 'CL', 'SCL', 'FSM', 'STA' ] },
    { name: 'RAML', popularity: 2, uri: 'http://raml.org/spec.html', checkedCriteria: [ 'MT', 'MR', 'OTO', 'MRA', 'MRO', 'DR', 'OSD', 'LT', 'MC', 'TI', 'AUT', 'SLA', 'ERR', 'STA', 'INC' ] },
    { name: 'I/O Docs', popularity: 0, uri: 'https://github.com/mashery/iodocs', checkedCriteria: [ 'MT', 'MR', 'OTO', 'MRA', 'MRO', 'LT', 'TAR', 'STA' ] }
  ],
  [TechnologyTypesEnum.DATA_INTERCHANGE_FORMAT]: [
    { name: 'JSON', popularity: 2, uri: 'https://www.json.org', checkedCriteria: [ 'JSON', 'NOM', 'HF', 'ECD' ] },
    { name: 'HAL', popularity: 1, uri: 'https://tools.ietf.org/html/draft-kelly-json-hal-08', checkedCriteria: [ 'LT', 'CR', 'HL', 'CL', 'SCL', 'JSON', 'NOM', 'HF', 'CUR', 'ECD', 'PX' ] },
    { name: 'Collection+JSON', popularity: 0, uri: 'http://amundsen.com/media-types/collection/format/', checkedCriteria: [ 'LT', 'DR', 'HL', 'ERR', 'CL', 'SCL', 'JSON', 'HF', 'ECD' ] },
    { name: 'Siren', popularity: 0, uri: 'https://github.com/kevinswiber/siren', checkedCriteria: [ 'LT', 'CR', 'CU', 'CM', 'DR', 'OSD', 'HL', 'HYP', 'CL', 'JSON', 'HF', 'ECD', 'TAR' ] },
    { name: 'Uber', popularity: 0, uri: 'https://github.com/mamund/media-types/blob/master/uber-hypermedia.asciidoc', checkedCriteria: [ 'LT', 'CR', 'CU', 'CM', 'HL', 'HYP', 'ERR', 'CL', 'JSON', 'HF', 'ECD' ] },
    { name: 'Mason', popularity: 0, uri: 'https://github.com/JornWildt/Mason', checkedCriteria: [ 'LT', 'CR', 'CU', 'CM', 'DR', 'OSD', 'HL', 'HYP', 'SLA', 'ERR', 'CL', 'SCL', 'JSON', 'NOM', 'HF', 'CUR', 'ECD', 'PX', 'SML', 'TAR' ] },
    { name: 'Json:Api', popularity: 0, uri: 'https://jsonapi.org', checkedCriteria: [ 'PS', 'HL', 'SLA', 'ERR', 'CL', 'JSON', 'HF', 'ECD' ] },
    { name: 'Atom Syndication Format', popularity: 1, uri: 'https://tools.ietf.org/html/rfc4287', checkedCriteria: [ 'CR', 'HL', 'CL', 'ECD', 'MF' ] },
    { name: 'Turtle', popularity: 0, uri: 'https://www.w3.org/TR/turtle/', checkedCriteria: [ 'HL', 'RDF', 'HF', 'PX' ] },
    { name: 'RDF XML', popularity: 2, uri: 'https://www.w3.org/TR/rdf-syntax-grammar/', checkedCriteria: [ 'HL', 'RDF', 'HF' ] },
    { name: 'Odata JSON Format', popularity: 0, uri: 'http://docs.oasis-open.org/odata/odata-json-format/v4.0/odata-json-format-v4.0.html', checkedCriteria: [ 'LT', 'CR', 'PS', 'HL', 'ERR', 'CL', 'JSON', 'HF', 'ECD', 'SML', 'MF' ] },
    { name: 'JSON-LD', popularity: 1, uri: 'https://json-ld.org', checkedCriteria: [ 'RDF', 'CL', 'SCL', 'JSON', 'NOM', 'CUR', 'ECD', 'PX' ] }
  ],
  [TechnologyTypesEnum.DATA_INTERCHANGE_FORMAT_WITH_RDF_IDL]: [
    { name: 'JSON-LD + Hydra', popularity: 1, uri: 'https://json-ld.org', checkedCriteria: [ 'LT', 'CM', 'DR', 'OSD', 'PS', 'HL', 'HYP', 'ERR', 'RDF', 'CL', 'SCL', 'JSON', 'NOM', 'CUR', 'ECD', 'PX' ] },
    { name: 'JSON-LD + Hydra + HTTP RDF + SHACL', popularity: 0, uri: 'https://json-ld.org', checkedCriteria: [ 'LT', 'CR', 'CU', 'CM', 'DR', 'OSD', 'PS', 'HL', 'HYP', 'MC', 'ERR', 'RDF', 'CL', 'SCL', 'JSON', 'NOM', 'CUR', 'ECD', 'PX', 'MF' ] }
  ],
  [TechnologyTypesEnum.IMPLEMENTATION_FRAMEWORKS]: [
    { name: 'Restfulie (ruby)', popularity: 0, uri: 'https://github.com/caelum/restfulie', checkedCriteria: [ 'SC', 'OTO', 'CN', 'EXT', 'EAR', 'LT', 'HL', 'LNM', 'CL', 'FSM', 'LGEN' ] },
    { name: 'Restfulie (java)', popularity: 0, uri: 'https://github.com/caelum/restfulie-java', checkedCriteria: [ 'SC', 'OTO', 'MRO', 'CN', 'LT', 'HL', 'LNM', 'CL', 'FSM', 'LGEN' ] },
    { name: 'Restfulie (.NET)', popularity: 0, uri: 'https://github.com/mauricioaniche/restfulie.net', checkedCriteria: [ 'SC', 'OTO', 'MRO', 'CN', 'EXT', 'LT', 'HL', 'LNM', 'CL', 'FSM', 'LGEN' ] },
    { name: 'API Platform (php)', popularity: 2, uri: 'https://api-platform.com', checkedCriteria: [ 'SC', 'OTO', 'MRO', 'CN', 'EXT', 'DR', 'OSD', 'LT', 'PS', 'HL', 'HYP', 'LNM', 'AUT', 'SLA', 'ERR', 'SD', 'DC', 'RDF', 'CL', 'SCL', 'LGEN' ] },
    { name: 'Spring HATEOAS', popularity: 1, uri: 'https://spring.io/projects/spring-hateoas', checkedCriteria: [ 'SC', 'OTO', 'MRO', 'CN', 'EXT', 'DR', 'OSD', 'LT', 'HL', 'ERR', 'CL', 'LGEN' ] },
    { name: 'JAX-RS 2.0', popularity: 1, uri: 'https://jax-rs.github.io/apidocs/2.0/', checkedCriteria: [ 'SC', 'OTO', 'MRO', 'CN', 'EXT', 'LT', 'HL', 'HYP', 'CL', 'LGEN' ] },
    { name: 'A framework for the semantic description of restful web apis', popularity: 0, uri: 'https://ieeexplore.ieee.org/document/6928953/', checkedCriteria: [ 'SC', 'OTO', 'MRO', 'CN', 'EXT', 'DR', 'OSD', 'LT', 'PS', 'HL', 'HYP', 'SD', 'RDF', 'CL', 'SCL', 'LGEN' ] },
    { name: 'Ripozo', popularity: 0, uri: 'https://ripozo.readthedocs.io/en/latest/', checkedCriteria: [ 'SC', 'OTO', 'MRO', 'CN', 'EXT', 'LT', 'HL', 'HYP', 'CL', 'LGEN' ] }
  ]
}
