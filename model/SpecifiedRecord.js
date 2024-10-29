class SpecifiedRecord {
    constructor(targetValue, actualValue, bonus) {
        this.targetValue = targetValue;
        this.actualValue = actualValue;
        this.bonus = bonus;
    }

    getTargetValue() {
        return this.targetValue;
    }

    getActualValue() {
        return this.actualValue;
    }

    getBonus() {
        return this.bonus;
    }

    toDocument() {
        return {
            targetValue: this.targetValue,
            actualValue: this.actualValue,
            bonus: this.bonus
        };
    }

    static documentToSpecifiedRecord(document) {
        const targetValue = document.targetValue;
        const actualValue = document.actualValue;
        const bonus = document.bonus;
        return new SpecifiedRecord(targetValue, actualValue, bonus);
    }

    equals(other) {
        if (!(other instanceof SpecifiedRecord)) return false;
        return (
            this.targetValue === other.targetValue &&
            this.actualValue === other.actualValue &&
            this.bonus === other.bonus
        );
    }
}
