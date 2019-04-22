package com.ettf.ppmtool.repositories;

import com.ettf.ppmtool.domain.Project;
import com.ettf.ppmtool.exceptions.ProjectIdException;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {

    Project findByProjectIdentifier(String proejctId);
    /*@Override
    Iterable<Project> findAllById(Iterable<Long> iterable);*/

    @Override
    Iterable<Project> findAll();
}
