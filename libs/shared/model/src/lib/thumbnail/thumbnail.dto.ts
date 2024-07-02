export interface CreateThumbnailDto {
  name: string;
  description?: string;
  url: string;
}

export interface UpdateThumbnailDto extends CreateThumbnailDto {
  id: number;
}
