"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const navigation_1 = require("next/navigation");
const react_1 = require("react");
function Home() {
    const router = (0, navigation_1.useRouter)();
    (0, react_1.useEffect)(() => router.push("/learningView"), [router]);
    return <main></main>;
}
exports.default = Home;
