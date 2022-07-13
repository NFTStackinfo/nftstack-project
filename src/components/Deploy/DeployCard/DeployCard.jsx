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
      value: data.collectionSymbol
    },
    {
      label: 'Total Supply Count',
      value: data.totalCount
    },
    {
      label: 'Reserve Count',
      value: data.reserveCount
    },
    {
      label: 'Presale Mint Price',
      value: `${data.presaleMintPrice} ETH`
    },
    {
      label: 'Presale Mint Limit Per Wallet',
      value: data.presaleLimitPerWallet
    },
    {
      label: 'Mint Price',
      value: `${data.mintPrice} ETH`
    },
    {
      label: 'Mint Limit Per Wallet',
      value: data.limitPerWallet
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
