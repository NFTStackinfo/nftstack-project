import React from 'react';
import {DeployCardStyle} from './DeployCardStyle';

const DeployCard = ({data}) => {

  const cardData = [
    {
      label: 'Project Name',
      value: data.projectName
    },
    {
      label: 'Collection Name',
      value: data.collectionName
    },
    {
      label: 'Symbol',
      value: data.symbol
    },
    {
      label: 'Total Supply Count',
      value: data.totalSupplyCount
    },
    {
      label: 'Presale Mint Price',
      value: `${data.presaleMintPrice} ETH`
    },
    {
      label: 'Presale Mint Limit Per Wallet',
      value: data.presaleMintLimitPerWallet
    },
    {
      label: 'Mint Price',
      value: `${data.mintPrice} ETH`
    },
    {
      label: 'Mint Limit Per Wallet',
      value: data.mintLimitPerWallet
    },
  ]
  return (
    <DeployCardStyle>
      {
        cardData.map(({label, value}) => {
          return (
            <li key={label}>
              <span className="label text-c">{label}</span>
              <span className="value text-b3">{value}</span>
            </li>
          )
        })
      }
    </DeployCardStyle>
  );
};

export default DeployCard;
