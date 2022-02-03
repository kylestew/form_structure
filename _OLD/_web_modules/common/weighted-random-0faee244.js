import { a as assert } from './assert-dcb272c2.js';
import { S as SYSTEM } from './system-8e2a0898.js';

/**
 * Returns a no-arg function which produces a random choice of given weighted
 * `choices` and using given {@link IRandom} instance (default {@link SYSTEM}.
 * If `weights` are given, it must be the same size as `choices` (else missing
 * weights will be assumed zero). If omitted entirely, each choice will have
 * same probability.
 *
 * @remarks
 * Throws an error if the `choices` array is empty (requires at least 1 item).
 * If the total sum of `weights` is <= 0 a warning is printed to the console and
 * the resulting function will only ever return the first `choice`.
 *
 * Based on:
 * {@link https://www.electricmonk.nl/log/2009/12/23/weighted-random-distribution/}
 *
 * @param choices -
 * @param weights - optional weights
 */
const weightedRandom = (choices, weights, rnd = SYSTEM) => {
    const n = choices.length;
    assert(n > 0, "no choices given");
    const opts = weights
        ? choices
            .map((x, i) => [weights[i] || 0, x])
            .sort((a, b) => b[0] - a[0])
        : choices.map((x) => [1, x]);
    const total = opts.reduce((acc, o) => acc + o[0], 0);
    total <= 0 && console.warn("total weights <= 0");
    return () => {
        const r = rnd.float(total);
        let sum = total;
        for (let i = 0; i < n; i++) {
            sum -= opts[i][0];
            if (sum <= r) {
                return opts[i][1];
            }
        }
        return undefined;
    };
};

export { weightedRandom as w };
