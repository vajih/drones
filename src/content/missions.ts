// Mission slug → primary capability families that address it.
// Used by /missions matrix.
import type { Family } from './products';

export type MissionMeta = {
  slug: string;
  primary: Family[];
  supporting: Family[];
};

export const missionMatrix: MissionMeta[] = [
  { slug: 'border', primary: ['vigilance', 'kinetic'], supporting: ['ground', 'maritime'] },
  { slug: 'tactical-isr', primary: ['kinetic', 'vigilance'], supporting: ['ground'] },
  { slug: 'counter-mortar', primary: ['kinetic'], supporting: ['vigilance'] },
  { slug: 'strike-hvt', primary: ['kinetic'], supporting: ['vigilance'] },
  { slug: 'persistent-isr', primary: ['vigilance'], supporting: ['maritime', 'kinetic'] },
  { slug: 'sead', primary: ['kinetic'], supporting: ['vigilance'] },
  { slug: 'cuas', primary: ['counter-uas'], supporting: ['vigilance'] },
  { slug: 'critical-infrastructure', primary: ['counter-uas', 'ground'], supporting: ['vigilance', 'maritime'] },
  { slug: 'coastal-defense', primary: ['maritime', 'kinetic'], supporting: ['vigilance'] },
  { slug: 'anti-fac', primary: ['maritime', 'kinetic'], supporting: ['vigilance'] },
  { slug: 'sigint', primary: ['vigilance'], supporting: [] },
  { slug: 'c2-resilience', primary: ['vigilance'], supporting: [] },
  { slug: 'logistics', primary: ['ground'], supporting: [] },
  { slug: 'route-clearance', primary: ['ground'], supporting: [] },
  { slug: 'industrial-resilience', primary: ['manufacturing'], supporting: [] },
];
