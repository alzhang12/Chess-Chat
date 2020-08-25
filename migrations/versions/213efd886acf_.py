"""empty message

Revision ID: 213efd886acf
Revises: 
Create Date: 2020-08-24 15:02:23.502548

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '213efd886acf'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
#    op.drop_column('users_table', 'email')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users_table', sa.Column('email', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.create_table('users',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('username', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('password', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='users_pkey'),
    sa.UniqueConstraint('password', name='users_password_key'),
    sa.UniqueConstraint('username', name='users_username_key')
    )
    # ### end Alembic commands ###
