/**
 * @jest-environment jsdom
 */

import createTodo from './createTodo.js';

describe('Test todos', () => {
    describe('Test todo', () => {
        const item = createTodo({
            id: 1,
            text: 'Buy beer',
        });

        const firstChild = item.children[0];
        const secondChild = item.children[1];

        test('expect node name -> DIV', () => {
            expect(item.nodeName).toEqual('DIV');
        });

        test('expect children count -> 2', () => {
            expect(item.childElementCount).toEqual(2);
        });

        test('className -> todo-item', () => {
            expect(item.className).toEqual('todo-item');
        });

        test('expect id -> 1', () => {
            expect(item.id).toEqual('1');
        });

        test('expect firstChild innerTex ->  "Buy beer"', () => {
            expect(firstChild.innerText).toEqual('Buy beer');
        });

        test('expect secondChild ->  div', () => {
            expect(secondChild.nodeName).toEqual('DIV');
        });
    });
});
