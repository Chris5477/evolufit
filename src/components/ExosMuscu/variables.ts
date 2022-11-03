import { Dispatch, SetStateAction } from "react"

export interface TypeExosMuscuProps {
    groupMuscular : string
    setModal : Dispatch<SetStateAction<boolean>>
}

export interface TypeMapFormMuscu {
    subject : string,
    performance : number
}