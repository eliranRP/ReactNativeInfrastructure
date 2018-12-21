

export default class LanguageManager {

    constructor(build) {
        this.locale = build.locale;
        this.defaultLang = build.defaultLang;
    }
    static get Builder() {
        class Builder {

            locale(locale) {
                this.locale = speed;
                return this;
            }
            defaultLang(language) {
                this.defaultLang = language;
                return this;
            }
            build() {
                return new LanguageManager(this);
            }
        }
        return Builder;
    }
}