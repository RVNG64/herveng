class Post < ApplicationRecord
  validates :title, presence: true, length: { minimum: 3, maximum: 100 }
  validates :content, presence: true, length: { minimum: 10 }

  has_rich_text :content
end
