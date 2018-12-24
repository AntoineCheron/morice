import { CriteriaWeights } from '../model/maturity'
import { ComparedTechnology, TechnologyTypesEnum, Technologies, TechnologiesScored } from '../model/technology'
import { getCriteria } from '../services/maturity'
import { technologies } from './technology-data'

export function getTechnologies(types: string[]): ComparedTechnology[] {
  return Object.keys(technologies)
    .filter(key => types.includes(key))
    .reduce<ComparedTechnology[]>((results, key) =>
      results.concat(technologies[key]), []
    );
}

function getTechnologiesPerKind(selectedKinds: TechnologyTypesEnum[]): Technologies {
  const selectedKindsStr = selectedKinds.map(k => k.toString())
  
  return Object.keys(technologies)
  .filter(key => selectedKindsStr.includes(key))
  .reduce<Technologies>((acc, key) => { acc[key] = technologies[key]; return acc; }, {})
}

export function filterTechnologies(
  selectedKinds: TechnologyTypesEnum[],
  criteriaWeights: CriteriaWeights,
  requiredCriteria: string[]
): TechnologiesScored {
  const technologiesOfSelectedKinds = getTechnologiesPerKind(selectedKinds)
  return Object.keys(technologiesOfSelectedKinds)
    .reduce<TechnologiesScored>((acc, key) => {
      const technologies = technologiesOfSelectedKinds[key]
      const criteriaForThisKind = getCriteria([key])
      const requiredCriteriaForThisKind = requiredCriteria
        .filter(criteria => criteriaForThisKind.includes(criteria))

      const value = technologies
        .filter(technology => hasRequiredCriteria(technology, requiredCriteriaForThisKind))
        .map(technology => {
          return {
            ...technology,
            score: computeScore(technology, criteriaWeights)
          };
        })
        .sort((a, b) => (
          (a.score * 1000) - (b.score * 1000))
          + (a.checkedCriteria.length - b.checkedCriteria.length)
        );

      acc[key] = value;
      return acc;
    }, {})
}

function computeScore(technology: ComparedTechnology, criteriaWeights: CriteriaWeights): number {
  return technology.checkedCriteria
    .map(criteria => criteriaWeights[criteria] || 0)
    .reduce((acc, val) => acc + val, 0)
}

function hasRequiredCriteria(technology: ComparedTechnology, requiredCriteria: string[]): boolean {
  return requiredCriteria.every(c => technology.checkedCriteria.includes(c))
}
