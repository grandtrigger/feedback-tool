import { browser, by, element } from 'protractor';

export class TalkDetailPage {

    campoTema = element(by._());
    campoInstrutor = element(by._());
    
    navigateTo(url){
        return browser.get(url);
    }

}