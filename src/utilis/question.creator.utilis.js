import wordPicker from "./word.picker.utilis";

export default function questionCreator(list) {
    let langSelection = Math.round(Math.random());

    if (langSelection === 0) {
        const ChosenWord = wordPicker(list);

        let Options = [wordPicker(list).word, wordPicker(list).word, wordPicker(list).word, wordPicker(list).word]

        if (!Options.includes(ChosenWord.word)) {
            Options[Math.floor(Math.random() * Options.length)] = ChosenWord.word;
        }

        return {
            word: ChosenWord.translation,
            trueAnswer: ChosenWord.word,
            Options,
        };
    }
    else {


        const ChosenWord = wordPicker(list);

        let Options = [wordPicker(list).translation, wordPicker(list).translation, wordPicker(list).translation, wordPicker(list).translation]

        if (!Options.includes(ChosenWord.word)) {
            Options[Math.floor(Math.random() * Options.length)] = ChosenWord.translation;
        }

        return {
            word: ChosenWord.word,
            trueAnswer: ChosenWord.translation,
            Options,
        };

    }
}
