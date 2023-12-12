import { inModuleTwo } from 'two'
import { inModuleWithPeerDeps } from 'with-peer-deps'

console.log(inModuleTwo)

/*
  Uncomment this and:
  1. type "s" after "inModuleTwoAl" to trigger auto-complete
  2. accept with Enter and get it auto-imported
*/
// console.log(inModuleTwoAl)


console.log(inModuleWithPeerDeps)

/*
  Uncomment this and:
  1. type "s" after "inModuleWithPeerDepsAl" to trigger auto-complete
  2. accept with Enter: completion works but not auto-import
  3. check Typescript LSP logs and look for error mentioning: getAutoImportSymbolFromCompletionEntryData
*/
// console.log(inModuleWithPeerDepsAl)
