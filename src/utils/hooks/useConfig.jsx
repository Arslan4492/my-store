import { ConfigContext } from "@/contexts/config-context";
import { useContext } from "react";

// ==============================|| CONFIG - HOOKS ||============================== //

const useConfig = () => useContext(ConfigContext);

export default useConfig;
