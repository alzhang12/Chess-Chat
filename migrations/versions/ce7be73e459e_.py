"""empty message

Revision ID: ce7be73e459e
Revises: 497d4cd0861f
Create Date: 2020-09-05 10:16:24.737042

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ce7be73e459e'
down_revision = '497d4cd0861f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users_table', sa.Column('game_status', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users_table', 'game_status')
    # ### end Alembic commands ###
