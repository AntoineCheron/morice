import { ComparedTechnology, TechnologyTypes, Technologies } from '../model/technology'

export function getTechnologies(type: TechnologyTypes): ComparedTechnology[] {
  return technologies[type]
}

const technologies: Technologies = {
  [TechnologyTypes.INTERFACE_DESCRIPTION_LANGUAGE]: [
    { name: 'RAPIDO - CRUD Option', uri: 'http://example.com', checkedCriteria: [ 'MR', 'MRO', 'EAR', 'LT', 'STA'] },
    { name: 'RAPIDO - Hypermedia option', uri: 'http://example.com', checkedCriteria: [ 'MR', 'MRO', 'EAR', 'LT', 'HL', 'HYP', 'CL', 'FSM', 'STA' ] },
    { name: 'Modeling RESTful Applications', uri: 'http://example.com', checkedCriteria: [ 'MT', 'MR', 'OTO', 'MRA', 'MRO', 'DR', 'OSD', 'LT', 'HL', 'HYP', 'COA', 'CL', 'FSM', 'RS', 'STA'] },
    { name: 'Formal modeling of RESTful APIs using finite state machines', uri: 'http://example.com', checkedCriteria: [ 'MT', 'MR', 'HL', 'HYP', 'FSM', 'STA'] },
    { name: 'A model-driven approach for REST compliant service', uri: 'http://example.com', checkedCriteria: [ 'MT', 'SC', 'MR', 'OTO', 'MRA', 'MRO', 'DR', 'OSD', 'HL', 'HYP', 'CL', 'STA'] },
    { name: 'Hydra', uri: 'http://example.com', checkedCriteria: [ 'MR', 'OTO', 'MRA', 'MRO', 'DR', 'OSD', 'LT', 'RUN', 'PS', 'HL', 'HYP', 'TI', 'ERR', 'SD', 'RDF', 'CL', 'SCL', 'STA' ] },
    { name: 'Atom Publishing Protocol + Atom Syndication Format', uri: 'http://example.com', checkedCriteria: [ 'MT', 'MR', 'MRA', 'EAR', 'DR', 'OSD', 'LT', 'RUN', 'HL', 'TI', 'CL', 'SCL', 'STA' ] },
    { name: 'WSDL + SAWSDL', uri: 'http://example.com', checkedCriteria: [ 'MT', 'MR', 'OTO', 'MRA', 'MRO', 'DR', 'OSD', 'LT', 'MC', 'SD', 'RDF', 'STA' ] },
    { name: 'WADL', uri: 'http://example.com', checkedCriteria: [ 'MT', 'MR', 'OTO', 'MRA', 'MRO', 'DR', 'OSD', 'LT', 'MC', 'ERR', 'STA' ] },
    { name: 'OpenApi/Swagger', uri: 'http://example.com', checkedCriteria: [ 'MT', 'SC', 'MR', 'OTO', 'MRA', 'MRO', 'DR', 'OSD', 'LT', 'HL', 'HYP', 'TI', 'AUT', 'SLA', 'ERR', 'CL', 'STA' ] },
    { name: 'API Blueprint + MSON', uri: 'http://example.com', checkedCriteria: [ 'MT', 'SC', 'MR', 'OTO', 'MRA', 'MRO', 'LT', 'MC', 'TI', 'ERR', 'CL', 'SCL', 'STA' ] },
    { name: 'hREST + microWSMO', uri: 'http://example.com', checkedCriteria: [ 'OTO', 'MRO', 'DR', 'OSD', 'LT', 'SD', 'RDF', 'TAR', 'STA' ] },
    { name: 'RESTdesc', uri: 'http://example.com', checkedCriteria: [ 'MT', 'SC', 'MR', 'OTO', 'MRO', 'DR', 'OSD', 'LT', 'RUN', 'SD', 'RDF', 'CL', 'SCL', 'TAR' ] },
    { name: 'RADL', uri: 'http://example.com', checkedCriteria: [ 'MT', 'SC', 'MR', 'OTO', 'MRA', 'MRO', 'DR', 'OSD', 'LT', 'RUN', 'HL', 'HYP', 'AUT', 'RDF', 'CL', 'SCL', 'FSM', 'STA' ] },
    { name: 'RAML', uri: 'http://example.com', checkedCriteria: [ 'MT', 'MR', 'OTO', 'MRA', 'MRO', 'DR', 'OSD', 'LT', 'MC', 'TI', 'AUT', 'SLA', 'ERR', 'STA', 'INC' ] },
    { name: 'I/O Docs', uri: 'http://example.com', checkedCriteria: [ 'MT', 'MR', 'OTO', 'MRA', 'MRO', 'LT', 'TAR', 'STA' ] }
  ],
  [TechnologyTypes.DATA_INTERCHANGE_FORMAT]: [
    { name: 'JSON', uri: 'http://example.com', checkedCriteria: [ 'JSON', 'NOM', 'HF', 'ECD' ] },
    { name: 'HAL', uri: 'http://example.com', checkedCriteria: [ 'LT', 'CR', 'HL', 'CL', 'SCL', 'JSON', 'NOM', 'HF', 'CUR', 'ECD', 'PX' ] },
    { name: 'Collection+JSON', uri: 'http://example.com', checkedCriteria: [ 'LT', 'DR', 'HL', 'ERR', 'CL', 'SCL', 'JSON', 'HF', 'ECD' ] },
    { name: 'Siren', uri: 'http://example.com', checkedCriteria: [ 'LT', 'CR', 'CU', 'CM', 'DR', 'OSD', 'HL', 'HYP', 'CL', 'JSON', 'HF', 'ECD', 'TAR' ] },
    { name: 'Uber', uri: 'http://example.com', checkedCriteria: [ 'LT', 'CR', 'CU', 'CM', 'HL', 'HYP', 'ERR', 'CL', 'JSON', 'HF', 'ECD' ] },
    { name: 'Mason', uri: 'http://example.com', checkedCriteria: [ 'LT', 'CR', 'CU', 'CM', 'DR', 'OSD', 'HL', 'HYP', 'SLA', 'ERR', 'CL', 'SCL', 'JSON', 'NOM', 'HF', 'CUR', 'ECD', 'PX', 'SML', 'TAR' ] },
    { name: 'Json:Api', uri: 'http://example.com', checkedCriteria: [ 'PS', 'HL', 'SLA', 'ERR', 'CL', 'JSON', 'HF', 'ECD' ] },
    { name: 'Atom Syndication Format', uri: 'http://example.com', checkedCriteria: [ 'CR', 'HL', 'CL', 'ECD', 'MF' ] },
    { name: 'Turtle', uri: 'http://example.com', checkedCriteria: [ 'HL', 'RDF', 'HF', 'PX' ] },
    { name: 'RDF XML', uri: 'http://example.com', checkedCriteria: [ 'HL', 'RDF', 'HF' ] },
    { name: 'Odata JSON Format', uri: 'http://example.com', checkedCriteria: [ 'LT', 'CR', 'PS', 'HL', 'ERR', 'CL', 'JSON', 'HF', 'ECD', 'SML', 'MF' ] },
    { name: 'JSON-LD', uri: 'http://example.com', checkedCriteria: [ 'RDF', 'CL', 'SCL', 'JSON', 'NOM', 'CUR', 'ECD', 'PX' ] }
  ],
  [TechnologyTypes.DATA_INTERCHANGE_FORMAT_WITH_RDF_IDL]: [
    { name: 'JSON-LD + Hydra', uri: 'http://example.com', checkedCriteria: [ 'LT', 'CM', 'DR', 'OSD', 'PS', 'HL', 'HYP', 'ERR', 'RDF', 'CL', 'SCL', 'JSON', 'NOM', 'CUR', 'ECD', 'PX' ] },
    { name: 'JSON-LD + Hydra + HTTP RDF + SHACL', uri: 'http://example.com', checkedCriteria: [ 'LT', 'CR', 'CU', 'CM', 'DR', 'OSD', 'PS', 'HL', 'HYP', 'MC', 'ERR', 'RDF', 'CL', 'SCL', 'JSON', 'NOM', 'CUR', 'ECD', 'PX', 'MF' ] }
  ],
  [TechnologyTypes.IMPLEMENTATION_FRAMEWORKS]: [
    { name: 'Restfulie (ruby)', uri: 'http://example.com', checkedCriteria: [ 'SC', 'OTO', 'CN', 'EXT', 'EAR', 'LT', 'HL', 'LNM', 'CL', 'FSM', 'LGEN' ] },
    { name: 'Restfulie (java)', uri: 'http://example.com', checkedCriteria: [ 'SC', 'OTO', 'MRO', 'CN', 'LT', 'HL', 'LNM', 'CL', 'FSM', 'LGEN' ] },
    { name: 'Restfulie (.NET)', uri: 'http://example.com', checkedCriteria: [ 'SC', 'OTO', 'MRO', 'CN', 'EXT', 'LT', 'HL', 'LNM', 'CL', 'FSM', 'LGEN' ] },
    { name: 'API Platform (php)', uri: 'http://example.com', checkedCriteria: [ 'SC', 'OTO', 'MRO', 'CN', 'EXT', 'DR', 'OSD', 'LT', 'PS', 'HL', 'HYP', 'LNM', 'AUT', 'SLA', 'ERR', 'SD', 'DC', 'RDF', 'CL', 'SCL', 'LGEN' ] },
    { name: 'Spring HATEOAS', uri: 'http://example.com', checkedCriteria: [ 'SC', 'OTO', 'MRO', 'CN', 'EXT', 'DR', 'OSD', 'LT', 'HL', 'ERR', 'CL', 'LGEN' ] },
    { name: 'JAX-RS 2.0', uri: 'http://example.com', checkedCriteria: [ 'SC', 'OTO', 'MRO', 'CN', 'EXT', 'LT', 'HL', 'HYP', 'CL', 'LGEN' ] },
    { name: 'A framework for the semantic description of restful web apis', uri: 'http://example.com', checkedCriteria: [ 'SC', 'OTO', 'MRO', 'CN', 'EXT', 'DR', 'OSD', 'LT', 'PS', 'HL', 'HYP', 'SD', 'RDF', 'CL', 'SCL', 'LGEN' ] },
    { name: 'Ripozo', uri: 'http://example.com', checkedCriteria: [ 'SC', 'OTO', 'MRO', 'CN', 'EXT', 'LT', 'HL', 'HYP', 'CL', 'LGEN' ] }
  ]
}
