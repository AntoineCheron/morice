export type MaturityCategory = {
  name: string,
  levels: { [name: string]: MaturityLevel }
}

export type MaturityLevel = {
  name: string,
  criteria: Criteria
}

export type Criteria = { [name: string]: string }

export type CriteriaWeights = { [criteriaName: string]: number }
