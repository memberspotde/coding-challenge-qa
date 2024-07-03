export interface CreateThumbnailDto {
  name: string;
  description?: string;
}

export interface UpdateThumbnailDto extends CreateThumbnailDto {
  id: number;
}
