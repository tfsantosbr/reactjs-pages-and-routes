import { Outlet } from "react-router-dom";
import { ControlPanelHeader } from "../components/control-panel/ControlPanelHeader";

export function ControlPanelLayout(){
    return (
        <>
            <ControlPanelHeader />
            <Outlet />
        </>
    )
}