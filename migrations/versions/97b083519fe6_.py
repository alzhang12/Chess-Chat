"""empty message

Revision ID: 97b083519fe6
Revises: 24c3cb495df5
Create Date: 2020-08-25 07:41:27.412005

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '97b083519fe6'
down_revision = '24c3cb495df5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('messages_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('owner', sa.String(), nullable=True),
    sa.Column('recipient', sa.String(), nullable=True),
    sa.Column('content', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('messages_table')
    # ### end Alembic commands ###
