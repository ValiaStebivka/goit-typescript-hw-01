import { concatenation } from "./concatenation";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, "hello!");
    });
}
function userConstructor(name, age, hobby) {
    return {
        name,
        age,
        hobby,
    };
}
//# sourceMappingURL=index.js.map

