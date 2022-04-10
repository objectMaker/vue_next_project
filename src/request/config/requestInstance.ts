import axios from "axios";
import instanceConfig from "./instanceConfig";
export const instance = axios.create(instanceConfig);
