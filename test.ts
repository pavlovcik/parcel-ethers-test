import { rollup } from "@rollup/browser";
import ethers from "ethers"
/// <reference types="./global" />
const provider = new ethers.BrowserProvider(window.ethereum)
console.trace(provider)