class User < ApplicationRecord
  belongs_to :room
  has_many :messages

  validates :nickname, uniqueness: true
  validates :nickname, presence: true
  validates_associated :messages
end
