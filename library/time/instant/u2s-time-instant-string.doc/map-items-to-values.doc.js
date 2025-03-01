/**
 * @template {readonly string[]} TupleTemplate
 * @template {Record<TupleTemplate[number], number>} ValuesTemplate
 * @typedef {(
 * {
 *  [Index in keyof TupleTemplate]: ValuesTemplate[TupleTemplate[Index]];
 * }
 * )} MapItemsToValues
 */
