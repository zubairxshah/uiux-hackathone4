import {data} from "@/app/(class13dec)/books/data"
import { NextResponse, NextRequest } from "next/server"

export async function GET(req:NextRequest, {params}:any) {
    const {id} = await params
    const filterData = data.find((e)=>e.id===id)
    return NextResponse.json({msg:filterData}) 
}


export async function Post(res:NextRequest) {
    return NextResponse.json({data:data}) 
    const body = await data
}