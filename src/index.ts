import { addMdnsEntry } from './mdns'

addMdnsEntry(process.env.MDNS_TLD || 'balena.local')
