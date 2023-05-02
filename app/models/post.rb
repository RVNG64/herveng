class Post < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  validates :title, presence: true, length: { minimum: 3, maximum: 100 }
  validates :content, presence: true, length: { minimum: 10 }
  validates :slug, presence: true

  has_rich_text :content
  has_one_attached :cover_image
end
