from bitcoinlib.wallets import Wallet
from bitcoinlib.keys import HDKey


def generate_vanity_address(vanity_prefix):
    found = False
    address = ""
    while not found:
        # Generate a new private key
        key = HDKey()
        address = key.address()
        if address.startswith(vanity_prefix):
            found = True
    return address, key.private_hex


vanity_prefix = "1love"
address, private_key = generate_vanity_address(vanity_prefix)
print(f"Vanity Address: {address}")
print(f"Private Key: {private_key}")
