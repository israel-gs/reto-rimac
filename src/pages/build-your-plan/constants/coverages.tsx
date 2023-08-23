import { IconCoverageAV, IconCoverageCP, IconCoverageLR } from '@components/icons'
import { type Coverage } from '../components/coverages/coverage-item'

export const coverageLR: Coverage = {
  name: 'Llanta robada',
  description: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más',
  price: 15,
  code: 'LR',
  icon: () => <IconCoverageLR />
}

export const coverageCP: Coverage = {
  name: 'Choque y/o pasarte la luz roja ',
  description: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más',
  price: 20,
  code: 'CP',
  icon: () => <IconCoverageCP />
}

export const coverageAV: Coverage = {
  name: 'Atropello en la vía Evitamiento ',
  description: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más',
  price: 50,
  code: 'AV',
  icon: () => <IconCoverageAV />
}

export const limitCoverage = 16_000
