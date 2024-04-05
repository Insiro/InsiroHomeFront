export interface WithId {
    id: string;
}
export interface WithLongId {
    id: long;
}

export interface CreatedAt {
    createdAt: Date;
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
