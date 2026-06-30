class Todo < ApplicationRecord
  belongs_to :user

  validates :title, presence: true, length: { maximum: 20 }
  validates :content, length: { maximum: 100 }
end
