export * as Api from "./api"

export const toMultipart = (dto:object, files?: File[])=>{
    const form = new FormData()
    form.append("data", JSON.stringify(dto) )
    files?.forEach((item)=> form.append("files", item))
    return form
}