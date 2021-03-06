import {getRandomInt} from './getRandomNumber';

const stringArray: string[] = 'sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur'
    .split(' ');

export function getRandomString(wordCount: number = 3): string {
    let result = '';
    for (let i = 0; i < wordCount; i++) {
        const randomWord = stringArray[getRandomInt(0, stringArray.length)];
        result = result + (result.length === 0 ? '' : ' ') + randomWord;
    }
    return result;
}