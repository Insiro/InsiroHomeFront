export interface WithId {
    id: uuid;
}
export interface WithLongId {
    id: long;
}

export interface CreatedAt {
    createdAt: DateString;
}
export interface WithStatus {
    status: string;
}
export interface Status {
    status?: string;
}

export interface WithDeleteFile {
    deletedFileNames?: string[];
}
export type Email = email;
