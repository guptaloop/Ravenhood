# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  gold            :integer          default(500000)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null

class User < ApplicationRecord
  validates :username, :session_token, uniqueness: true
  validates :username, :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :gold, numericality: { greater_than_or_equal_to: 0 }
  attr_reader :password
  after_initialize :ensure_session_token

  has_many :watched_stocks,
    foreign_key: :user_id,
    class_name: 'StockWatch'

  has_many :holdings,
    foreign_key: :user_id,
    class_name: 'Holding'
  
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.valid_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

	def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

	# in case there is a session_token conflict
  def generate_unique_session_token
		token = SecureRandom.urlsafe_base64(16)	
    while self.class.exists?(session_token: token)
      token = SecureRandom.urlsafe_base64(16)
    end
    token
	end
	
end
