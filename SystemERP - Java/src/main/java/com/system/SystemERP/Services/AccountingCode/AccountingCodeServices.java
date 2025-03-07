package com.system.SystemERP.Services.AccountingCode;

import com.system.SystemERP.Dtos.AccountingCode.AccountingCodeDTO;
import com.system.SystemERP.Entity.AccountingCode.AccountingCode;
import com.system.SystemERP.Repository.AccountingCode.AccountingCodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountingCodeServices {

    @Autowired
    private AccountingCodeRepository accountingCodeRepository;

    public Integer createAccountingCode(AccountingCodeDTO accountingCodeDTO) {

        System.out.println(accountingCodeDTO.accountingCode().name());

        var conversionAccountingCode = new AccountingCode(
                null,
                accountingCodeDTO.accountingCode().name(),
                accountingCodeDTO.accountingCodeDescription().name());

        var created = accountingCodeRepository.save(conversionAccountingCode);

        return created.getIdAccountingCode();
    }

    public Optional<AccountingCode> findByID(Integer id) {
        return accountingCodeRepository.findById(id);
    }

    public List<AccountingCode> findAll() {
        return accountingCodeRepository.findAll();
    }

    public void deleteByID(Integer id) {
        var accountingCodePresent = accountingCodeRepository.existsById(id);
        if (accountingCodePresent) {
            accountingCodeRepository.deleteById(id);
        }


    }


}
