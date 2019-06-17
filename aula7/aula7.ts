import {Batman} from './batman'




let homemMorcego = new Batman();
homemMorcego.setCodenome('Batman')
homemMorcego.setIdsecreta('Bruce Wayme')
homemMorcego.setPericia('ser FODAO')
homemMorcego.setPoder(8000)
homemMorcego.setSuperPoder('ser rico e ter medo de morcegos')

console.log(`o nome do heroi é: ${homemMorcego.getCodenome()}, e sua identidade secreta é: ${homemMorcego.getIdsecreta()}, ${homemMorcego.getPericia()}, seu poder é mais de: ${homemMorcego.getPoder()}, seu(s) superpoder(es) é(são): ${homemMorcego.getSuperPoder()}, seu arqui rival é: ${homemMorcego.getArqueRival()}, sua fraqueza é ${homemMorcego.getFraqueza()}`)
