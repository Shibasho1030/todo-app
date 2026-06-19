class User < ApplicationRecord
  has_secure_password

  has_many :todos, dependent: :destroy

  before_save { self.email = email.downcase }

  validates :name, presence: true, length: { maximum: 50 }
  validates :email, presence: true, uniqueness: { case_sesitive: false }, length: { maximum: 255 }
end
